import { Tv2, Tv2Icon } from "lucide-react"

const Services = () => {
  return (
    <div className="pb-40">
        <div>
            <h1 className="text-center font-medium text-4xl">SERVICES</h1>
        </div>
        <div className="md:grid md:grid-cols-4 flex flex-col gap-5 mt-5 ml-5 mr-5">
<div className="border shadow-xl p-4">
    <div className="text-center">
    
    <h1><Tv2 className="ml-40 "/>Web Design</h1>
    <p>Web design refers to the design of websites that are displayed on th internet. It usually refers to the user experience</p>
    </div>
 </div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-40"/>
    <h1 className="text-center">Fully Responsive</h1>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt ullam in eum enim. Earum expedita sit esse deleniti hic illo vitae, quaerat quo quasi vero deserunt sequi omnis vel!
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Web Development</h1>
<p>Web development is the building and maintenance of websites, it's the work that happens behind the scences to..</p>
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Creative Design</h1>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt ullam in eum enim. Earum expedita sit esse deleniti hic illo vitae, quaerat quo quasi vero deserunt sequi omnis vel!
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36"/>
    <h1 className="text-center">Retina Ready</h1>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt ullam in eum enim. Earum expedita sit esse deleniti hic illo vitae, quaerat quo quasi vero deserunt sequi omnis vel!
</div>
<div className="border shadow-xl p-4">
    <Tv2Icon className="ml-36" />
    <h1 className="text-center">App Development</h1>
<p>Mobile app development is the act or process by which a mobile app is developed for mobile devices.</p>
</div>
<div className="border shadow-xl p-4">
    < Tv2Icon className="ml-36"/>
    <h1 className="text-center">IOT Projects</h1>
The Internet of Things(IoT) describes the network of physical objects things that are embedded with sensors..
</div>
        </div>
    </div>
  )
}

export default Services