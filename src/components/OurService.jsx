import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Background from '../assets/Vector2.png'
import { Branding, BuildingInspections, BuildingPermits, BuildRenovations, Conceptdesigning, DesignBuilt, ExceptionalIcon, ZoningApplications } from '../icons/icons'

const OurService = ({Details}) => {
    const data = [
        {
            name: 'Exceptional guidance for ',
            name2: 'the Restaurant Layout',
            icon: <ExceptionalIcon />
        },
        {
            name: 'Design and Built Turnkey ',
            name2: 'Projects',
            icon: <DesignBuilt />
        },
        {
            name: 'Building ',
            name2: 'Inspections',
            icon: <BuildingInspections />
        },
        {
            name: 'New Build/',
            name2: 'Renovations',
            icon: <BuildRenovations />
        },
        {
            name: 'Zoning Applications',
            icon: <ZoningApplications />
        },
        {
            name: 'Building Permits',
            icon: <BuildingPermits />
        },
        {
            name: 'Branding',
            icon: <Branding />
        },
        {
            name: 'Concept 3D designing',
            icon: <Conceptdesigning />
        },
    ]
    return (
        <section className="layout-section">
            <div className="max-width bg-no-repeat lg:bg-cover py-16" style={{ backgroundImage: `url(${Background})`}} >
                <h2 className="heading-h2">OUR SERVICES</h2>
                <h3 className="heading-h3 leading-[4rem] font-bold">
                    Services We
                    <span className="text-[#8e7861]"> Provide</span>
                </h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 md:mt-20 mt-10">
                    {data.map((item) => (
                        <div className="flex bg-[#1B1B1BCC] flex-col border group hover:shadow-inner py-10 px-4 shadow-[#473C30] hover:scale-95 justify-center border-[#473C30] p-8 gap-6 items-center">
                            <span className="">{item.icon}</span>
                            <p className="text-[1.4rem]/[2rem] text-center font-semibold">{item.name} <br />{item.name2 && item.name2}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                <Link
                  to={Details.Button.Src}
                  className="common-btn w-fit flex tracking-widest items-center gap-5"
                >
                  {Details.Button.Name} <MdArrowRightAlt size={25} />
                </Link>
              </div>
            </div>
        </section>
    )
}

export default OurService