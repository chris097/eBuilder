import useQueryApi from '../../helpers/useQuery'
import Avatar from '../../public/svgs/avatar'

const About = () => {

  const { isLoading, data } = useQueryApi(['about'], 'user/info');

  const abouts:[] = data?.data;
  
  console.log(abouts)

  return (
    <div className='bg-white w-full p-4 rounded-md'>
      {isLoading ? 'Loading...' : (!abouts?.length ? <div className='flex space-x-5'>
        <Avatar />
        <div>
            <div className='text-lg'>Jane Doe</div>
            <div className='font-light text-sm text-basegray'>Frontend Engineer</div>
          <div className='mt-2'>
            <div className='text-lg'>ADDRESS</div>
            <div className='font-light text-sm text-basegray'>10 Deji Odunga Street, Anthony village, Lagos, Nigeria.</div>
          </div>
          <div className='mt-2'>
            <div className='text-lg'>Bio</div>
            <div className='font-light text-sm text-basegray'>
            Detailed-oriented, organized and meticulous employee. Works at fast pace to me
          </div>
          </div>
        </div>
      </div> : abouts.map((about:any, index:number) => (
        <div key={index} className='flex space-x-5'>
        <Avatar />
        <div>
            <div className='text-lg'>{about.first_name} {about.last_name}</div>
            <div className='font-light text-sm text-basegray'>{about.profession}</div>
          <div className='mt-2'>
            <div className='text-lg'>ADDRESS</div>
              <div className='font-light text-sm text-basegray'>{(`${about.street}, ${about.city}, ${about.state}, ${about.country}.`)}</div>
          </div>
          <div className='mt-2'>
            <div className='text-lg'>Bio</div>
            <div className='font-light text-sm text-basegray'>
            {about.bio}
          </div>
          </div>
        </div>
      </div>
      )))}
    </div>
  )
}

export default About