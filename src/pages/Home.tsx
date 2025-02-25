import DoughnutChart from "../components/Pie/PieChart";

const Home = () => {
  return (
    <>
      <p>Hello Home !</p>
      <p>Nutritions : Visualiser l'apport nutriotionnel des fruits !</p>
      <div className="doughnut">
        <DoughnutChart />
      </div>
    </>
  );
};

export default Home;
