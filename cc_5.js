const employees = [
  { name: "Ava", hourlyRate: 20, hoursWorked: 38 },
  { name: "Ben", hourlyRate: 22, hoursWorked: 42 },
  { name: "Cleo", hourlyRate: 18, hoursWorked: 45 },
  { name: "David", hourlyRate: 25, hoursWorked: 40 }
];

function calculateBasePay(rate, hours) {
  return rate * Math.min(hours, 40);
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
  return grossPay * 0.85;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

for (const emp of employees) {
  console.log(processPayroll(emp));
}
