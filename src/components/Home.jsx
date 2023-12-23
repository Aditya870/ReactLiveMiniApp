import Common from './Common';



function Home() {

    const head = "Grow your business with"
    const move = "Get Started"
    return (
      <>
        <Common head={head} move={move} visit={"/service"}/>
      </>
    );
  }
  
  export default Home;