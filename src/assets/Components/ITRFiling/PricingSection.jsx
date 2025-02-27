import PricingPlan from "./PricingPlan";

const PricingSection = () => {
  const plans = [
    {
      title: "Beginner Plan",
      price: 999,
      oldPrice: 1998,
      discount: "50%",
      features: [
        "Income up to 10 Lacs",
        "Indian Resident",
        "Salary",
        "Rental Income",
      ],
      buttonText: "Add to Cart",
    },
    {
      title: "Millionaire Plan",
      price: 1999,
      oldPrice: 3998,
      discount: "50%",
      features: [
        "Income up to 15 Lacs",
        "Includes Beginner Plan",
        "Short Term Capital Gains",
      ],
      buttonText: "Add to Cart",
    },
    {
      title: "Multi-Millionaire Plan",
      price: 2999,
      oldPrice: 5998,
      discount: "50%",
      features: [
        "Income up to 25 Lacs",
        "Includes Millionaire Plan",
        "Mutual Funds Transactions",
      ],
      buttonText: "Add to Cart",
    },
    {
      title: "Billionaire Plan",
      price: "Customized",
      oldPrice: "",
      discount: "",
      features: [
        "Income not covered in previous plans",
        "Corporate, HUF, Non-residents",
        "Futures & Option Trading",
      ],
      buttonText: "Get a Quote",
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6">Choose Your Plan</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
