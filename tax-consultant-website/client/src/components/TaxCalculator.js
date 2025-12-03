import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Stack
} from '@mui/material';
import {
  Calculate as CalculateIcon,
  AccountBalance as GSTIcon,
  Receipt as TDSIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const calculatorTypes = [
  {
    id: 'income-tax',
    name: 'Income Tax Calculator',
    description: 'Calculate income tax for FY 2025-26 (AY 2026-27) as per slabs',
    icon: <CalculateIcon />,
    fields: ['income', 'taxYear']
  },
  {
    id: 'gst',
    name: 'GST Calculator',
    description: 'Compute GST amount and final price using standard rates (5%, 12%, 18%, 28%)',
    icon: <GSTIcon />,
    fields: ['amount', 'rate']
  },
  {
    id: 'tds',
    name: 'TDS Calculator',
    description: 'Estimate TDS for salary, rent, professional fees, interest, etc.',
    icon: <TDSIcon />,
    fields: ['amount', 'category']
  }
];

const taxYears = ['2025-26', '2024-25', '2023-24', '2022-23'];

const taxSlabs = {
  '2025-26': [
    { from: 0, to: 300000, rate: 0 },
    { from: 300001, to: 600000, rate: 5 },
    { from: 600001, to: 900000, rate: 10 },
    { from: 900001, to: 1200000, rate: 15 },
    { from: 1200001, to: 1500000, rate: 20 },
    { from: 1500001, to: Infinity, rate: 30 }
  ],
  '2024-25': [
    { from: 0, to: 300000, rate: 0 },
    { from: 300001, to: 600000, rate: 5 },
    { from: 600001, to: 900000, rate: 10 },
    { from: 900001, to: 1200000, rate: 15 },
    { from: 1200001, to: 1500000, rate: 20 },
    { from: 1500001, to: Infinity, rate: 30 }
  ]
};

const calculateIncomeTax = (income, taxYear) => {
  let taxableIncome = Number(income);
  let tax = 0;

  const slabs = taxSlabs[taxYear] || taxSlabs['2024-25'];

  // Calculate tax based on slabs
  for (let i = 0; i < slabs.length; i++) {
    const slab = slabs[i];
    if (taxableIncome > slab.from) {
      const taxableAmount = Math.min(taxableIncome - slab.from, slab.to - slab.from);
      tax += (taxableAmount * slab.rate) / 100;
    }
  }

  // Health and Education Cess (4%)
  const cess = tax * 0.04;
  const totalTax = tax + cess;

  return {
    taxableIncome: Math.round(taxableIncome),
    basicTax: Math.round(tax),
    cess: Math.round(cess),
    totalTax: Math.round(totalTax),
    effectiveRate: ((totalTax / taxableIncome) * 100).toFixed(2)
  };
};

const calculateGST = (amount, rate) => {
  const gstAmount = (amount * rate) / 100;
  const totalAmount = Number(amount) + gstAmount;

  return {
    baseAmount: Math.round(Number(amount)),
    gstAmount: Math.round(gstAmount),
    totalAmount: Math.round(totalAmount)
  };
};

const calculateTDS = (amount, category) => {
  const tdsRates = {
    salary: 10,
    interest: 10,
    rent: 10,
    professional: 10,
    commission: 5,
    contractor: 2
  };

  const rate = tdsRates[category.toLowerCase()] || 10;
  const tdsAmount = (Number(amount) * rate) / 100;

  return {
    grossAmount: Math.round(Number(amount)),
    tdsAmount: Math.round(tdsAmount),
    netAmount: Math.round(Number(amount) - tdsAmount)
  };
};

const TaxSlabsDialog = ({ open, onClose, taxYear }) => {
  const slabs = taxSlabs[taxYear];
  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Tax Slabs for {taxYear}</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Income Range</TableCell>
                <TableCell align="right">Tax Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slabs?.map((slab, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {slab.from.toLocaleString('en-IN')} - {slab.to === Infinity ? 'Above' : slab.to.toLocaleString('en-IN')}
                  </TableCell>
                  <TableCell align="right">{slab.rate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          * Health and Education Cess of 4% is applicable on the calculated tax amount
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

const TaxCalculator = () => {
  const theme = useTheme();
  const [selectedCalculator, setSelectedCalculator] = useState('');
  const [formData, setFormData] = useState({
    income: '',
    taxYear: taxYears[0],
    amount: '',
    rate: '',
    category: ''
  });
  const [result, setResult] = useState(null);
  const [showTaxSlabs, setShowTaxSlabs] = useState(false);

  const handleCalculate = () => {
    let calculationResult;

    switch (selectedCalculator) {
      case 'income-tax':
        calculationResult = calculateIncomeTax(formData.income, formData.taxYear);
        break;
      case 'gst':
        calculationResult = calculateGST(formData.amount, formData.rate);
        break;
      case 'tds':
        calculationResult = calculateTDS(formData.amount, formData.category);
        break;
      default:
        return;
    }

    setResult(calculationResult);
  };

  const renderCalculatorCards = () => (
    <Grid container spacing={2} alignItems="stretch">
      {calculatorTypes.map((calc) => (
        <Grid item xs={12} sm={6} md={4} key={calc.id} sx={{ display: 'flex' }}>
          <Card 
            sx={{ 
              cursor: 'pointer',
              height: '100%',
              flex: 1,
              minHeight: 120,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[4]
              },
              ...(selectedCalculator === calc.id && {
                borderColor: 'primary.main',
                borderWidth: 2,
                borderStyle: 'solid'
              })
            }}
            onClick={() => {
              setSelectedCalculator(calc.id);
              setResult(null);
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Box color="primary.main" mr={1}>
                  {calc.icon}
                </Box>
                <Typography variant="h6" component="div">
                  {calc.name}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {calc.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderCalculatorForm = () => {
    const calculator = calculatorTypes.find(calc => calc.id === selectedCalculator);
    if (!calculator) return null;

    return (
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            {calculator.name}
            {selectedCalculator === 'income-tax' && (
              <Tooltip title="View Tax Slabs">
                <IconButton size="small" sx={{ ml: 1 }} onClick={() => setShowTaxSlabs(true)}>
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Typography>

          <Grid container spacing={3}>
            {calculator.fields.map(field => {
              if (field === 'taxYear') {
                return (
                  <Grid item xs={12} sm={6} key={field}>
                    <FormControl fullWidth>
                      <InputLabel>Tax Year</InputLabel>
                      <Select
                        value={formData.taxYear}
                        onChange={(e) => setFormData({ ...formData, taxYear: e.target.value })}
                        label="Tax Year"
                      >
                        {taxYears.map(year => (
                          <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                );
              }

              if (field === 'category') {
                return (
                  <Grid item xs={12} sm={6} key={field}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        label="Category"
                      >
                        <MenuItem value="salary">Salary</MenuItem>
                        <MenuItem value="interest">Interest</MenuItem>
                        <MenuItem value="rent">Rent</MenuItem>
                        <MenuItem value="professional">Professional</MenuItem>
                        <MenuItem value="commission">Commission</MenuItem>
                        <MenuItem value="contractor">Contractor</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                );
              }

              if (field === 'rate') {
                return (
                  <Grid item xs={12} sm={6} key={field}>
                    <FormControl fullWidth>
                      <InputLabel>GST Rate (%)</InputLabel>
                      <Select
                        value={formData.rate}
                        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                        label="GST Rate (%)"
                      >
                        <MenuItem value="5">5%</MenuItem>
                        <MenuItem value="12">12%</MenuItem>
                        <MenuItem value="18">18%</MenuItem>
                        <MenuItem value="28">28%</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                );
              }

              return (
                <Grid item xs={12} sm={6} key={field}>
                  <TextField
                    fullWidth
                    label={field === 'income' ? 'Annual Income' : 'Amount'}
                    type="number"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>₹</Typography>
                    }}
                  />
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleCalculate}
                startIcon={<CalculateIcon />}
                disabled={!calculator.fields.every(field => formData[field])}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>

          {result && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Calculation Result
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(result).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </Typography>
                      <Typography variant="h6">
                        {key.includes('Rate') ? `${value}%` : `₹${Number(value).toLocaleString('en-IN')}`}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Paper>
      </Box>
    );
  };

  return (
    <Box>
      <Alert 
        severity="info" 
        sx={{ 
          mb: 3,
          '& .MuiAlert-message': { 
            width: '100%'
          }
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
          <Typography variant="body2">
            This is an estimation tool. For accurate tax planning, please consult with our experts.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            size="small"
            variant="outlined"
            color="info"
            startIcon={<ContactIcon />}
            sx={{ ml: 2, whiteSpace: 'nowrap' }}
          >
            Contact Us
          </Button>
        </Stack>
      </Alert>
      {renderCalculatorCards()}
      {renderCalculatorForm()}
      <TaxSlabsDialog
        open={showTaxSlabs}
        onClose={() => setShowTaxSlabs(false)}
        taxYear={formData.taxYear}
      />
    </Box>
  );
};

export default TaxCalculator; 