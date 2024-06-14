function Hero() {
  return (
    <div className=" relative w-full h-[640x]">
      <div className="bg-[url('assets/img/hero/hero-1.jpg')] bg-no-repeat h-[680px] bg-cover absolute w-full -z-20"></div>
      <div className=" bg-[#00000099] w-full h-[680px] -z-10"></div>
      <div className=" absolute h-[640px] w-full top-0 flex items-center justify-center z-10 bg-transparent">
        <div className=" container max-w-[1320px] mx-auto">
          <p className=" text-center w-full font-interExtraBold text-[4rem] max-md:text-4xl text-white">
            Explore The World Together
          </p>
          <p className=" text-white text-center font-inter text-2xl mt-4 max-md:text-lg max-md:mt-10 max-md:w-2/3 max-md:mx-auto">
            Find Awesome Flight, Hotel, Tour And Packages
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
