'use client';
import { IoDiamond } from 'react-icons/io5'
import { BsSnow } from 'react-icons/bs'
import Container from "../Container";
import { FaSkiing } from 'react-icons/fa';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill,GiIsland,GiBoatFishing , GiCastle , GiForestCamp , GiCaveEntrance , GiCactus , GiBarn} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from "../CategoryBox";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export const categories = [
    {
        label : 'Beach',
        icon : TbBeach,
        description : 'this property is close to beach!'
    },
    {
        label : 'Windmills',
        icon : GiWindmill,
        description : 'this property has windmills!'
    },
    {
        label : 'Modern',
        icon : MdOutlineVilla,
        description : 'this property is Modern!'
    },
    {
        label : 'CountrySide',
        icon : TbMountain,
        description : 'this property is in the country side!'
    },
    {
        label : 'Pools',
        icon : TbPool,
        description : 'this property has a pool!'
    },
    {
        label : 'Islands',
        icon : GiIsland,
        description : 'this property is on island!'
    },
    {
        label : 'Lake',
        icon : GiBoatFishing,
        description : 'this property is close to a lake!'
    },
    {
        label : 'Skiing',
        icon : FaSkiing,
        description : 'this property has skiing activities!'
    },
    {
        label : 'Castles',
        icon : GiCastle,
        description : 'this property is in a castle!'
    },
    {
        label : 'Arctic',
        icon : BsSnow,
        description : 'this property is in snow!'
    },
    {
        label : 'Cave',
        icon : GiCaveEntrance,
        description : 'this property is in Cave!'
    },
    {
        label : 'Desert',
        icon : GiCactus,
        description : 'this property is in Desert!'
    },
    {
        label : 'Barns',
        icon : GiBarn,
        description : 'this property is in the narn!'
    },
    {
        label : 'Lux',
        icon : IoDiamond,
        description : 'this property is luxurious!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null;
    }

    return(
        <Container>
        <div 
            className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-hidden
        "
        >
            {categories.map((item) => (
                <CategoryBox 
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                />
            ))}
        </div>
        </Container>
    );
}
export default Categories;