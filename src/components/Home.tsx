
import { Separator } from "@radix-ui/react-menubar"
import { Button } from "./ui/button"
import { Tv2, Tv2Icon } from "lucide-react"
import ContactMe from "./ContactMe"

function Home() {
  return (
    <div>
    
        <img src="https://img.freepik.com/free-photo/elevated-view-laptop-stationeries-blue-backdrop_23-2147880457.jpg?t=st=1734187191~exp=1734190791~hmac=0b99638f023db2b8d22f49afc1213f13146c0716e9defc07d71589f4df0f6a6a&w=996" 
        className="w-full h-screen absolute"
        alt="" />
        <img src="/src/assets/Himanshu.png" className="relative md:ml-[440px] rounded-b-full shadow-black" alt="" />
        <div className="relative -mt-72 md:ml-36 ml-5">
        <Button className="text-4xl md:text-6xl p-4 mt-56 ml-5">Hello !</Button>
        <p className="text-4xl md:text-6xl text-white font-medium  md:ml-40"> I'm Himanshu Sekhar Behera</p>
        <h1 className="text-xl text-white" >I'm a Web Developer with extensive experience for over 5years. My expertise is to create  and websities design,graphic design, business card and many...</h1>      
      </div>
      <div className="relative ml-5 font-bold md:text-4xl">
      <h2>JAVA DEVELOPER | WEB DEVELOPER | MERNSTACK DEVELOPER | SAP ABAP DEVELOPER</h2>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/vintage-camera-pencil-open-laptop-twig-isolated-white-background_23-2147979091.jpg?t=st=1734188691~exp=1734192291~hmac=7b7f79e13cbbeb536c86f64d6b56b7d5a184897b450f96c146815e8ca75a99b3&w=996" className="w-full h-screen absolute" alt="" />
        <img src="/src/assets/Himanshu.png" className="relative rounded-e-full" alt="" />
        <div className="relative md:-mt-[400px] md:ml-[700px]">
            <h1 className=" md:text-6xl text-4xl font-medium ml-5">About Me </h1>
           <div className="md:-ml-60 mt-6">
           <p className="text-2xl md:text-4xl ml-5"> I am a skilled web designer with over 3years of experience in the industry. My passion lies in creating captivating <br/> website designs and implementing them through frontend development. I take pride in staying up to date with<br/> current design trends and leverageing my creativity to produce visually appealing and user friendly websites.<br/> Throught my Career, I have developed a deep understanding of Reactjs and Java.</p>
       <div className="flex gap-5 mt-5">
       <div className="ml-10">
       <Button className="bg-orange-400 hover:bg-orange-700">Hire Me</Button>
       </div>
       <div>
       <Button>DOWNLOAD CV </Button>
       </div>
       </div>
       
            </div> 
             </div>
             <div>
        <div>
            <h1 className="flex font-medium text-4xl mt-5 ml-5">Projects</h1>
        <div className="md:grid md:grid-cols-4 flex flex-col mt-10 pb-10 gap-5 ml-4 mr-4">
            <div className="border shadow-2xl">
                <img src="https://img.freepik.com/free-vector/isometric-farm-infographics_1284-21487.jpg?t=st=1734193626~exp=1734197226~hmac=35a9e5f86c50ebc0f1298471b79b3380f7a3fabf00d9abf5687844ef4f3961a1&w=996" alt="" />
            <h1 className="text-center font-medium">Village Development System</h1>
            </div>
            <div className="border shadow-2xl">
                <img src="https://img.freepik.com/free-psd/banner-travel-template-design_23-2149207050.jpg?t=st=1734193666~exp=1734197266~hmac=687ae648d86b729468abbd813ee358887cd53b46e637784a5e09b1010b88023f&w=1380" className="h-60" alt="" />
            <h1 className="text-center font-medium">Tour and Travels</h1>
            </div>
            <div className="border shadow-2xl">
                <img src="https://img.freepik.com/free-photo/luxury-pool-swimming-ladder-vacation_1203-5711.jpg?t=st=1734193713~exp=1734197313~hmac=e0a9e1615b8d319ffee2e9ca8282edd7963dabf9c26d5f0e4fc224ad72c54ffe&w=996" alt="" />
            <h1 className="text-center font-medium">Swimmimg Pool Booking</h1>
            </div>
            <div className="border shadow-2xl">
                <img src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?t=st=1734193766~exp=1734197366~hmac=ad8318e64e3dac32bdc6fbcce9adc77cd19978d3d49fb21df6803be4fd9fa2ee&w=1060" className="h-60" alt="" />
           <h1 className="text-center font-medium">Real State</h1>
            </div>
            <div className="border shadow-2xl">
                <img src="https://img.freepik.com/free-vector/isometric-landing-page_52683-5717.jpg?t=st=1734193894~exp=1734197494~hmac=a7244116b3d7b6d7645531dafb1e7b6603837ffb779f25cd99775ca19f308415&w=996" alt="" />
            <h1 className="text-center font-medium">E-commerce</h1>
            </div>
        </div>
        </div>
    </div>
    <div>
        <div>
            <h1 className="text-center text-6xl font-medium"> Skills</h1>
        </div>
        <div className="md:grid md:grid-cols-5 flex flex-col ml-5 mr-5 mt-5 gap-5">
            <div className="border shadow-2xl">
                <img src="https://logolook.net/wp-content/uploads/2022/11/Java-Logo.png" alt="" />
                <Separator/>
               
            </div>
            <div className="border shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://quintagroup.com/cms/js/js-image/javascript-logo.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://www.drupal.org/files/project-images/screenshot_361.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://lh5.googleusercontent.com/NpCFEToPJTrK4VZ7i4-ggNHgWfOGnLYh7S059c25TOCZunHJv8ljPOHIjnoWB_Y1cxCIQ6dbXf-x4J9G2SXvuUEoo2C3r2tWj3qekRyZRQhk0JT-vGtnVk5oOEFGcRn8hQ-I3CH-5FZXgPJFlG7-4pI" alt="" />
            </div>
            <div className="border shadow-2xl">
<img src="https://cdn.prod.website-files.com/644a347fa803e3d724c0fedf/671b6ec0bcb52d06ddce3e84_MySQL_logo.svg" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png" alt="" />
            </div>
            <div className="border shadow-2xl">
                <img src="https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png" alt="" />
            </div>
        </div>
    </div>
    <div className="pt-5 pb-40 mt-14">
        <div>
            <h1 className="text-center font-medium text-4xl">SERVICES</h1>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col gap-5 mt-5 ml-5 mr-5">
<div className="border shadow-xl p-4">
    <div className="text-center">
    
    <h1><Tv2 className="ml-40 "/>Web Design</h1>
    <p className="mt-3 text-justify">Web design refers to the design of websites that are displayed on th internet. It usually refers to the user experience</p>
    </div>
 </div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-40"/>
    <h1 className="text-center">Fully Responsive</h1>
<p className="mt-3 text-justify"> Responsive website design means that the elements on your website (i.e., texts, images, videos) automatically adjust according to what device it is being visited from.</p>
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Web Development</h1>
<p className="mt-3 text-justify">Web development is the building and maintenance of websites, it's the work that happens behind the scences to..</p>
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Creative Design</h1>
<p className="mt-3 text-justify">Creative website design takes the visual elements like color palette, typography, and images and crafts them into an enticing layout that reflects your brand personality.</p>
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Retina Ready</h1>
<p className="mt-3 text-justify "> for those who are using Retina Quality displays, they will see your site at its very best. without the images appearing blurry or fuzzy due to a lower pixel size.In the example above, the image on the left is from my standard resolution computer</p></div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36" />
    <h1 className="text-center">App Development</h1>
<p className="mt-3 text-justify">Mobile app development is the act or process by which a mobile app is developed for mobile devices.</p>
</div>
<div className="border shadow-xl p-4">
    < Tv2Icon className="ml-36"/>
    <h1 className="text-center">IOT Projects</h1>
<p className="mt-3 text-justify">The Internet of Things(IoT) describes the network of physical objects things that are embedded with sensors..</p>
</div>
        </div>
    </div>
    <div>
    <ContactMe/>
    </div>
    </div>
    </div>
    
  )
}

export default Home