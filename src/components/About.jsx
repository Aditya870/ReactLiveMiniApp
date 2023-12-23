import Common from './Common';




function About() {
  const head = "Welcome to About Page"
  const move = "Contact Now"
    return (
      <>
        <Common head={head} move={move} visit={"/contact"}/>
      </>
    );
  }
  
  export default About;