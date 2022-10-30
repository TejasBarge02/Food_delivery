import Image from "next/image"
const Navbar = () => {
    return(
        <nav class="bg-orange-700 sticky top-0 flex space-x-96 text-white h-24 justify-center py-4">
            <div class="flex space-x-6 py-2">
                <div class="bg-white w-9 h-9 mx-1 my-2 px-1.5 py-1.5 rounded-full">
                    <Image src="/img/telephone.png" alt="" width={32}height={10} />
                </div>
                <div class="mx-20">
                    <div>
                        ORDER NOW!!
                    </div>
                    <div>
                        123 456 7890
                    </div>
                </div>
                {/* <div class="mx-20"></div> */}
            </div>
            <ul class="px-2 py-4 flex space-x-6 justify-center">
                <li>Home</li>
                <li>Products</li>
                <Image src="/img/logo1.png" alt="" width={140} height ={10} />
                <li>Menu</li>
                <li>Contact</li>
    
            </ul>
            <div class="flex py-4" >
                    <div>
                        <Image src="/img/cart.png" alt="" width={32} height={32} />
                    </div>
            </div>

        </nav>
    )
}
export default Navbar