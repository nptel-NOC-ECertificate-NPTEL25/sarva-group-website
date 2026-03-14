import { useState } from "react";
import { motion } from "motion/react";
import { Calculator as CalcIcon, Zap, TrendingDown, Clock, DollarSign, Sun } from "lucide-react";

export function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState<string>("5000");
  const [location, setLocation] = useState<string>("mumbai");
  const [roofType, setRoofType] = useState<string>("concrete");
  const [results, setResults] = useState<any>(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill) || 0;
    
    // Simple calculation logic
    const systemSize = Math.ceil(bill / 400); // kW
    const monthlySavings = bill * 0.9; // 90% savings
    const yearlyBill = bill * 12;
    const yearlySavings = monthlySavings * 12;
    const systemCost = systemSize * 50000; // ₹50k per kW
    const subsidy = systemCost * 0.3; // 30% subsidy
    const netCost = systemCost - subsidy;
    const paybackYears = (netCost / yearlySavings).toFixed(1);

    setResults({
      systemSize,
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      systemCost: Math.round(systemCost),
      subsidy: Math.round(subsidy),
      netCost: Math.round(netCost),
      paybackYears,
      lifetimeSavings: Math.round(yearlySavings * 25),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CalcIcon className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Solar Savings Calculator</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Find out how much you can save with solar energy in just 2 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none text-lg"
                    placeholder="5000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                  >
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="pune">Pune</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roof Type
                  </label>
                  <select
                    value={roofType}
                    onChange={(e) => setRoofType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                  >
                    <option value="concrete">Concrete/RCC</option>
                    <option value="metal">Metal Sheet</option>
                    <option value="asbestos">Asbestos</option>
                    <option value="ground">Ground Mounted</option>
                  </select>
                </div>

                <button
                  onClick={calculateSavings}
                  className="w-full bg-[#FF7A00] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF7A00]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <CalcIcon className="w-5 h-5" />
                  Calculate Savings
                </button>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {results ? (
                <>
                  <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80 text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">Your Solar Savings Report</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span>Recommended System Size</span>
                        <span className="text-2xl font-bold">{results.systemSize} kW</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span>Monthly Savings</span>
                        <span className="text-2xl font-bold text-[#0A7F3F]">₹{results.monthlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span>Yearly Savings</span>
                        <span className="text-2xl font-bold">₹{results.yearlySavings.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Investment Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">System Cost</span>
                        <span className="font-semibold">₹{results.systemCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-[#0A7F3F]">
                        <span>Government Subsidy (30%)</span>
                        <span className="font-semibold">- ₹{results.subsidy.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                        <span className="font-semibold">Net Investment</span>
                        <span className="font-bold text-lg">₹{results.netCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0A7F3F] text-white p-6 rounded-xl text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-3xl font-bold">{results.paybackYears}</div>
                      <div className="text-sm">Years to Payback</div>
                    </div>
                    <div className="bg-[#FF7A00] text-white p-6 rounded-xl text-center">
                      <TrendingDown className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-3xl font-bold">₹{(results.lifetimeSavings / 100000).toFixed(1)}L</div>
                      <div className="text-sm">25-Year Savings</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white p-6 rounded-xl text-center">
                    <p className="text-lg font-semibold mb-4">Ready to start saving?</p>
                    <a
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#0A7F3F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                </>
              ) : (
                <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
                  <Sun className="w-20 h-20 mx-auto mb-6 text-[#FF7A00]" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Results Will Appear Here</h3>
                  <p className="text-gray-600">
                    Enter your details on the left and click "Calculate Savings" to see your personalized solar report
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Calculate Your Solar Savings?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Know Your Investment",
                description: "Understand exactly how much you'll save and when you'll break even",
              },
              {
                icon: Zap,
                title: "Plan Your Budget",
                description: "Get accurate cost estimates including government subsidies",
              },
              {
                icon: Sun,
                title: "Make Informed Decisions",
                description: "Compare different system sizes and see the impact on your bills",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
