import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const HomeLinks = () => {
    const HomeLinks = [
        {title : "All Kanji", path : "/kanji",color : "bg-gray-500",hover : "hover:bg-red-600"},
        {title : "JLPT N1", path : "/kanji?jlpt=1",color : "bg-red-500",hover : "hover:bg-red-600"},
        {title : "JLPT N2", path : "/kanji?jlpt=2",color : "bg-orange-500",hover : "hover:bg-orange-600"},
        {title : "JLPT N3", path : "/kanji?jlpt=3",color : "bg-yellow-500",hover : "hover:bg-yellow-600"},
        {title : "JLPT N4", path : "/kanji?jlpt=4",color : "bg-blue-500",hover : "hover:bg-blue-600"},
        {title : "JLPT N5", path : "/kanji?jlpt=5",color : "bg-green-500",hover : "hover:bg-green-600"},
    ]
    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
            {HomeLinks.map((link) => (
                <Link key={link.title} className={`${link.color}  text-white p-2 
                rounded text-center shadow-md ${link.hover} hover:shadow-lg hover:text-lg sm:mx-auto 
                transition duration-300`} to={link.path}>
                    {link.title}
                    <ArrowForwardIosIcon className="ml-55" />
                </Link>
            ))}
        </div>
    )
}
