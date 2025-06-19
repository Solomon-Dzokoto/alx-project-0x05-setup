import Link from "next/link";
import Button from "../common/Button"; // Assuming Button component exists
import { usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/store"; // Changed from useSelector to useAppSelector

const Header: React.FC = () => {

  const pathname = usePathname()
  const count = useAppSelector((state: RootState) => state.counter.value) // Use useAppSelector


  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {
            !["/counter-app"].includes(pathname) ? (
              <>
              <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          /></>
            ) : (
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }

        </div>
      </div>
    </header>
  );
};

export default Header;
