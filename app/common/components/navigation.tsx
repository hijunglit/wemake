import { Link } from "react-router"
import { Separator } from "./ui/separator"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

const menus = [
    {
        name: "Products",
        to: "/products",
        items: [
            {
                name: "Leaderboards",
                description: "See the top performers in your community",
                to: "/products/leaderboards",
            },
            {
                name: "Categories",
                description: "See the top performers in your community",
                to: "/products/categories",
            },
            {
                name: "Search",
                description: "See the top performers in your community",
                to: "/products/search",
            },
            {
                name: "Submit",
                description: "See the top performers in your community",
                to: "/products/submit",
            },
            {
                name: "Promote",
                description: "See the top performers in your community",
                to: "/products/promote",
            },
        ]
    },
    {
        name: "Jobs",
        to: "/jobs",
        items: [
            {
                name: "Remote jobs",
                description: "Find a remote job in our community",
                to: "/jobs?location=remote",
            },
            {
                name: "Full time jobs",
                description: "Find a Full-Time job in our community",
                to: "/jobs?type=full-time",
            },
            {
                name: "Freelance jobs",
                description: "Find a freelance job in our community",
                to: "/jobs?type=full-time",
            },
            {
                name: "Internships",
                description: "Find a Internship in our community",
                to: "/jobs?type=internship",
            },
            {
                name: "Submit a job",
                description: "Submit a job to our community",
                to: "/jobs/submit",
            },
        ]
    },
    {
        name: "Community",
        to: "/community",
        items: [
            {
                name: "All posts",
                description: "See all posts in out community",
                to: "/community",
            },
            {
                name: "Top posts",
                description: "See the top posts in out community",
                to: "/community?sort=top",
            },
            {
                name: "New posts",
                description: "See the new posts in out community",
                to: "/community?sort=new",
            },
            {
                name: "Create a posts",
                description: "Create post in out community",
                to: "/community/create",
            },
        ]
    },
    {
        name: "IdeasGPT",
        to: "/ideasgpt",
    },
    {
        name: "Teams",
        to: "/teams",
        items: [
            {
                name: "",
                description: "",
                to: "",
            },
            {
                name: "Create a team",
                description: "Create a team in our community",
                to: "/team/create",
            },
        ]
    }
]

export default function Navigation() {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter text-lg">
                    wemake
                </Link>
                <Separator orientation="vertical" className="h-6 mx-4" />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {menu.items?.map((item) => (
                                        <NavigationMenuItem key={item.name}>
                                            <Link to={item.to}>{item.name}</Link>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}