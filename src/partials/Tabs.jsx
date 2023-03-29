import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { HiPuzzle as StarIcon } from 'react-icons/hi'
import Career1 from '../images/career-01.jpg'
import Career2 from '../images/career-02.jpg'
import Career3 from '../images/career-03.jpg'
import Career4 from '../images/career-04.jpg'
import Career5 from '../images/career-05.jpg'
import Career6 from '../images/career-06.jpg'
// import { BeakerIcon as StarIcon } from '@heroicons/react/24/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    "Cost Effectivness": {
      title: "Cost Effectivness",
      image:Career1,
      desc: `Our developers use innovation, automation, and proven project workflow methodologies to build cost-effective high-quality solutions. We adjust the complete lifecycle of the project based on the clients' finalized resources and cost and use the latest technologies and techniques in DevOps and automated testing to effectively deliver a complete cost-efficient product.

    We also deploy effective communication along with smart requirements gathering to build robust systems and processes based on agile methodologies to expedite the development process allowing the clients to get a rapid return on their investment.
    
    With both hourly-based and fixed rate models, clients can easily choose the model that fits best with their needs and use our latest productivity tracking tools to have a transparent oversight of the work they're paying for.` },
    "Technology Expertise": {
      title: "Technology Expertise",
      image:Career2,
      desc: `Our developers are experts in all the major technologies and platforms and have extensive multi-year experience working on and completing complex projects on time and within the budget.

      We have an intensively thorough selection process and grading method that we use to hire and retain the best talent in their field. We also provide access to various resources and learning material for our talent to assess and improve their expertise and help them upkeep with the continuously changing technological landscape.
      
      Throughout these years, we have accumulated domain-level expertise in designing technical solutions for companies of various sizes and businesses including healthcare, finance, e-commerce, entertainment, telecommunication, manufacturing, transport, and retail.`
    },
    "Working Methodolgy": {
      title: "Working Methodolgy",
      image:Career3,
      desc: `We have mastered the implementation and integration of standardized processes to steer our development work. Our expertise in CI/CD and code workflow helps us in building robust automated mechanisms that prove valuable throughout the development and production lifecycles.

      We believe that there's no one size fits all methodology and we need to modify our processes based on the unique needs of each client. We use Agile, Waterfall, and a hybrid respectively as per the requirements of the clients and projects.
      
      With continuous tracking and feedback provisioning, the client has real-time control over the processes and could ask for modifications to further align the processes with the client's needs.`
    },
    "Responsiveness": {
      title: "Responsiveness",
      image:Career4,
      desc: `With daily standups and real-time communication channels established, clients could always check in to see the progress of the development underway. We use communication tools like Slack, Teams, Zoom, and Google Meet to enable the smoothest communication experience for our clients and teams.

      Progress of tasks and issues is tracked over Jira and clients can create new issues and tasks or reprioritize the old ones. Our developers responsively complete the tasks and keep the clients in the loop on the progress.
      
      Any hindrance or issue faced by the client in these processes would be catered to immediately by utilizing the client's feedback to modify the process accordingly.`
    },
  })

  return (
    <div className="w-full  px-2 py-16 sm:px-0  ">
       <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">We have a proven track record of great success stories and with our customer-centric and client-first approach, we try to provide the best solutions considering the available client resources</p>
          </div>
      <Tab.Group>
        <Tab.List className="flex md:flex-row flex-col space-x-1 rounded-xl p-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white-700',
                  '',
                  selected
                    ? 'dark-white shadow border-2'
                    : 'text-white-100 hover:bg-white/[0.12] hover:text-dark'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            // console.log()
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-dark p-3',
                'ring-dark ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
              )}
            >
              <div className="bg-[#1D1D20] pb-8 sm:pb-12 lg:pb-12">
                <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                    <div>
                      <div>
                        {/* <img
                          className="h-11 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                          alt="Workflow"
                        /> */}
                      </div>
                      <div className="mt-20">

                        <div className="mt-6 sm:max-w-xl">
                          <h1 className="text-2xl font-extrabold text-white-900 tracking-tight sm:text-large ">
                            {posts.title}
                          </h1>
                          <p className="mt-6 text-sm text-slate-400">
                            {posts.desc}
                          </p>
                        </div>


                      </div>
                    </div>
                  </div>

                  <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <div className="hidden sm:block">
                        <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                        <svg
                          className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                          width={404}
                          height={392}
                          fill="none"
                          viewBox="0 0 404 392"
                        >
                          <defs>
                            <pattern
                              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                        </svg>
                      </div>
                      <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                        <img
                          className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                          src={posts.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul> */}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
