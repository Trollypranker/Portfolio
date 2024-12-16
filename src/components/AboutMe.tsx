import { Button } from "./ui/button"

function AboutMe() {
  return (
    <div>
        <img src="https://img.freepik.com/free-photo/vintage-camera-pencil-open-laptop-twig-isolated-white-background_23-2147979091.jpg?t=st=1734188691~exp=1734192291~hmac=7b7f79e13cbbeb536c86f64d6b56b7d5a184897b450f96c146815e8ca75a99b3&w=996" className="w-full h-screen absolute" alt="" />
        <img src="/src/assets/Himanshu.png" className="relative rounded-e-full" alt="" />
        <div className="relative md:-mt-[400px] md:ml-[700px] ">
            <h1 className=" text-4xl ml-5 font-bold">About Me </h1>
            <p className="text-4xl md:text-4xl md:-ml-60 mt-5"> I am a skilled web designer with over 3years of experience in the industry. My passion lies in creating captivating <br/> website designs and implementing them through frontend development. I take pride in staying up to date with<br/> current design trends and leverageing my creativity to produce visually appealing and user friendly websites.<br/> Throught my Career, I have developed a deep understanding of Reactjs and Java.</p>
       <div className="flex gap-5 mt-5">
       <div>
       <Button className="bg-orange-400 hover:bg-orange-700">Hire Me</Button>
       </div>
       <div>
       <Button>DOWNLOAD CV </Button>
       </div>
       </div>
        </div>
    </div>
  )
}

export default AboutMe