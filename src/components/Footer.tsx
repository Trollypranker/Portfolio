
const Footer = () => {
  return (
    <div className="md:p-6 p-4 bg-orange-100">
      <div className=" md:ml-96 md:gap-40 gap-5 flex md:flex-col  list-none  ">
        <div>
          <h1 className="md:text-2xl">CUSTOMER</h1>
          <div>
            <li>BUYER</li>
            <li>SUPPLIER</li>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl">COMPANY</h1>
          <div>
            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl">FURTHER INFORMATION</h1>
          <div>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </div>
      </div>
      <div className="text-center text-xl mt-5">
      @2024 All Rights Reserved By Trollypranker
      </div>
    </div>
  )
}

export default Footer