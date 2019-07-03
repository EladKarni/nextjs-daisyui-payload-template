import Typed from "react-typed";

function Home() {
  return (
    <div id="typed-strings">
      <Typed
        strings={[
          "We're currently under construction",
          "Come back after we are done!"
        ]}
        typeSpeed={100}
        loop
      />

      <style jsx global>{`
        body {
          font-family: "Cinzel";
          background: #ff2244;
        }
        #typed-strings {
          width: auto;
          font-size: 3em;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
}
export default Home;
