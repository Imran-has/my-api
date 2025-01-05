import Link from "next/link"

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center p-7 w-full'>
        <div className="  container  mx-auto flex gap-2  justify-center items-center">
            <h1 className='text-white text-2xl font-bold'>created by imran hassan  </h1>
            <Link href="https://www.linkedin.com/in/imran-hassan-723b841b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedln</Link>
            <Link href="https://www.instagram.com/ihassankhan71?igsh=MTdxcmNldXNxeDlrNA==">Instagram</Link>
            <Link href="https://github.com/Imran-has">github</Link>
        </div>
        <div className="flex justify-center space-x-4 gap-4">
        <Link
          href="/clients"
          className="px-4 py-4 bg-red-500 text-2xl text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Client-Side Rendering
        </Link>
        <Link
          href="/serverside"
          className="px-4 py-4 bg-green-600 text-2xl text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Server-Side Rendering
        </Link>
      </div>
    </footer>
  )
}

export default Footer
