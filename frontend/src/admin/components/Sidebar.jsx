import { HomeIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export function Sidebar({ setSelectItem }) {

    const links = [
        { name: 'dashboard', label: 'Dashboard', icon: HomeIcon },
        { name: 'usuarios', label: 'Usuarios', icon: UserGroupIcon },
        { name: 'planos', label: 'Planos', icon: ShoppingBagIcon },
    ]
    return (
        <div>
            <nav className="bg-gray-500/20 text-gray-800 h-screen w-64">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <ul className="mt-4">
                    {links.map(link => (
                        <li key={link.name} onClick={() => setSelectItem(link.name)} className="px-4 py-2 hover:bg-blue-700 text-gray-800 hover:text-white cursor-default ">
                            <div className="flex items-center ">
                                <link.icon className="w-5 h-5 mr-2" />
                                {link.label}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}