import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-3 bg-orange-200 shadow-sm dark:bg-gray-900">
      <div> </div>
      <Link href="/" className="text-2xl font-medium text-orange-900 dark:text-gray-100">
        大阪おすすめグルメ
      </Link>
      <div className="flex items-center space-x-4">
        {" "}
        {/* グルメ、ログイン、登録のリンクを右端に配置 */}
        <Link href="/grume" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-6")}>
          グルメ
        </Link>
        <Link href="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-4")}>
          ログイン
        </Link>
        <Link href="/register" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "px-4")}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
