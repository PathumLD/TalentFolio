import React from 'react';
import dp from '../../assets/dp.jpg';
import { FaPlus } from 'react-icons/fa';

const CandidateProfileInfo = () => {
  return (
    <>
    <div className='pb-6 border-[#001A23]/50 border-b-2'>
    <div className='flex justify-center '>
      <div className='flex justify-center w-24 h-24 mt-6 bg-gray-200 rounded-full outline outline-gray-300 outline-offset-4 md:w-32 md:h-32 '>
        <img src={dp} alt="candidate profile" className='w-40 rounded-full '/>
      </div>
    </div>
    <h1 className='mt-4 text-3xl font-bold text-center text-blue '>Pathum Lakshan</h1>
    <h1 className='text-xl font-medium text-center text-blue'>Software Engineer</h1>
    </div>

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6 '>
        <h3 className='mt-4 text-xl font-bold text-primary-text'>Basic Details</h3>

          <div className='flex flex-col items-start mt-4 '>
            <label htmlFor="bio" className='font-medium text-blue-text'>Your Bio</label>
            <div
              id="bio"
              name="bio"
              className='p-2 text-justify rounded-md text-md text-primary-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium'
              }}
            />
          </div>

          <div className='flex flex-col items-start mt-2'>
            <label htmlFor="bio" className='font-medium text-blue-text'>Linkedin</label>
            <div
              id="bio"
              name="bio"
              className='p-2 text-justify rounded-md text-md text-primary-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: '<a href="https://www.example.com" target="_blank">https://www.linkedin.com/in/pathumld/</a> '
              }}
            />
          </div>

          <div className='flex flex-col items-start mt-2'>
            <label htmlFor="bio" className='font-medium text-blue-text'>Github</label>
            <div
              id="bio"
              name="bio"
              className='p-2 text-justify rounded-md text-md text-primary-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: '<a href="https://www.example.com" target="_blank">https://www.linkedin.com/in/pathumld/</a> '
              }}
            />
          </div>

          <div className='flex flex-col items-start mt-2'>
            <label htmlFor="bio" className='font-medium text-blue-text'>Personal Website</label>
            <div
              id="bio"
              name="bio"
              className='p-2 text-justify rounded-md text-md text-primary-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: 'https://www.linkedin.com/in/pathumld/ '
              }}
            />
          </div>

        
        
        <span></span>
      </div>
    </div>

               {/* Education */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Education</h3>
          <button className='hover:'><FaPlus /></button>
        </div>
          
          <div
              id="bio"
              name="bio"
              className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' BSc. Information Systems ' 
              }}
          />
      
          <div
              id="bio"
              name="bio"
              className='ml-4 font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' University of Colombo School of Computing '
              }}
          />

          <div
              id="bio"
              name="bio"
              className='mt-4 font-semibold text-left rounded-md text-md text-blue-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' MSc. Computer Science '
              }}
          />
                
          <div
              id="bio"
              name="bio"
              className='ml-4 font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' University of Colombo School of Computing '
              }}
          />
      </div>
    </div>

              {/* Experience */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Working Experience</h3>
          <button className='hover:'><FaPlus /></button>
        </div>
          
          <div
              id="bio"
              name="bio"
              className='mt-4 font-semibold text-justify rounded-md text-md text-blue-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Intern Software Engineer (2022 - 2023) ' 
              }}
          />
      
          <div
              id="bio"
              name="bio"
              className='ml-4 font-semibold text-justify rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Boffo System Labs '
              }}
          />

          <div
              id="bio"
              name="bio"
              className='mt-4 font-semibold text-justify rounded-md text-md text-blue-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Asociate Software Engineer (2023 - Present) '
              }}
          />
                
          <div
              id="bio"
              name="bio"
              className='ml-4 font-semibold text-justify rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Boffo System Labs '
              }}
          />
      </div>
    </div>
    
                {/* Projects */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Projects</h3>
          <button className='hover:'><FaPlus /></button>
        </div>
          
          <div
              id="bio"
              name="bio"
              className='mt-4 text-lg font-semibold text-justify rounded-md text-blue-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Resume Management System ' 
              }}
          />

          <div
              id="bio"
              name="bio"
              className='ml-4 italic font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' ReactJS | NodeJS | ExpressJS | MongoDB | TailwindCSS '
              }}
          />
      
          <div
              id="bio"
              name="bio"
              className='mt-1 ml-4 text-sm text-justify rounded-md font-regular text-primary-text'
              contentEditable={true}
              dangerouslySetInnerHTML={{
                __html: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium '
              }}
          />
      </div>
    </div>

                  {/* Skills */}

    <div className='border-[#001A23]/50 border-b-2 '>
      <div className='mx-4 my-6'>
        <div className='flex justify-between mt-4'>
          <h3 className='text-xl font-bold text-primary-text'>Skills</h3>
          <button className='hover:'><FaPlus /></button>
        </div>
          
          <div className='flex flex-wrap gap-x-8 sm:gap-x-40 sm:gap-y-10 gap-y-4'>
            <span>
            <div
                id="bio"
                name="bio"
                className='mt-4 text-lg font-semibold text-justify rounded-md text-blue-text'
                contentEditable={true}
                dangerouslySetInnerHTML={{
                  __html: ' Technical Skills ' 
                }}
            />

            <div
              id="bio"
              name="bio"
              className='ml-4 italic font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{
                __html: 'ReactJS | NodeJS '
              }}
            />
            </span>

            <span>
            <div
                id="bio"
                name="bio"
                className='mt-4 text-lg font-semibold text-justify rounded-md text-blue-text'
                contentEditable={true}
                dangerouslySetInnerHTML={{
                  __html: ' Soft Skills ' 
                }}
            />

            <div
              id="bio"
              name="bio"
              className='ml-4 italic font-semibold text-left rounded-md text-md text-black/50'
              contentEditable={true}
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{
                __html: 'ReactJS | NodeJS '
              }}
            />
            </span>

            

            
            
          </div>
          

      </div>
    </div>
    
    </>
  );
};

export default CandidateProfileInfo;
