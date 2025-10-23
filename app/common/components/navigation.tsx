import { Link } from "react-router"
import { Separator } from "./ui/separator"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { cn } from "~/lib/utils"

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
                                {menu.items ?
                                    (
                                        <>
                                            <Link to={menu.to}>
                                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                            </Link>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[600px] font-light gab-3 p-4 grid-cols-2">
                                                    {menu.items?.map((item) => (
                                                        <NavigationMenuItem key={item.name} className={cn([
                                                            "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                                                            item.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                            item.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20"
                                                        ])}>
                                                            <NavigationMenuLink asChild>
                                                            <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                                                                <span className="text-sm font-medium leading-none">
                                                                    {item.name}
                                                                </span>
                                                                <p className="text-sm leading-snug text-muted-foreground">
                                                                    {item.description}
                                                                </p>
                                                            </Link>
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                                            {menu.name}
                                        </Link>
                                    )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}