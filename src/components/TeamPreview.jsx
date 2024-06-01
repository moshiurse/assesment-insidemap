import PropTypes from 'prop-types';
import Jersey from '../submodules/assets/icons/Jersey';
import { useSelector } from 'react-redux';

TeamPreview.propTypes = {
    formation: PropTypes.string,
}

export default function TeamPreview(props) {
    const {formation} = props;
    const teamData = useSelector(state => state.team);
    console.log(teamData);
    let teamMarkup = null;

    const fourThreeThree = () => {
        return (
            <>
                <div className='flex justify-center gap-5 h-28'>
                        <Jersey className='self-end' position='a' index={0}/>
                        <Jersey position='a' index={1}/>
                        <Jersey className='self-end' position='a' index={2}/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-10'>
                        <Jersey position='m' index={3}/>
                        <Jersey position='m' index={4}/>
                        <Jersey position='m' index={5}/>
                </div>
                <div className='h-40 flex justify-center gap-5'>
                        <Jersey  position='d' index={6}/>
                        <Jersey  position='d' index={7}/>
                        <Jersey  position='d' index={8}/>
                        <Jersey  position='d' index={9}/>
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey position='g' index={10}/>
                </div>
            </>
        )
    }

    const fourFourTwo = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-20'>
                        <Jersey className='self-center' position='a' index={0}/>
                        <Jersey className='self-center' position='a' index={1}/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-10'>
                        <Jersey  position='m' index={2}/>
                        <Jersey  position='m' index={3}/>
                        <Jersey  position='m' index={4}/>
                        <Jersey  position='m' index={5}/>
                </div>
                <div className='h-40 flex justify-center gap-28'>
                        <Jersey  position='d' index={6}/>
                        <Jersey  position='d' index={7}/>
                        <Jersey  position='d' index={8}/>
                        <Jersey  position='d' index={9}/>
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey  position='g' index={10}/>
                </div>
            </>
        )
    }

    const threeFourThree = () => {
        return (
            <>
                <div className='flex justify-center gap-5 h-28'>
                        <Jersey className='self-end' position='a' index={0}/>
                        <Jersey position='a' index={1}/>
                        <Jersey className='self-end' position='a' index={2}/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-5'>
                        <Jersey position='m' index={3}/>
                        <Jersey position='m' index={4}/>
                        <Jersey position='m' index={5}/>
                        <Jersey position='m' index={6}/>
                </div>
                <div className='h-40 flex justify-center gap-6'>
                        <Jersey position='d' index={7}/>
                        <Jersey position='d' index={8}/>
                        <Jersey position='d' index={9}/>
                </div>
                <div className='flex h-20 justify-center items-center'>
                        <Jersey position='g' index={10}/>
                </div>
            </>
        )
    }
    const fiveTwoThree = () => {
        return (
            <>
                <div className='flex justify-center gap-5 h-20'>
                        <Jersey className='self-center' position='a' index={0}/>
                        <Jersey position='a' index={1} />
                        <Jersey className='self-center' position='a' index={2}/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-28'>
                        <Jersey position='m' index={3}/>
                        <Jersey position='m' index={4}/>
                </div>
                <div className='h-40 flex justify-center gap-5'>
                        <Jersey position='d' index={5}/>
                        <Jersey className='self-center' position='d' index={6}/>
                        <Jersey className='self-center' position='d' index={7}/>
                        <Jersey className='self-center' position='d' index={8}/>
                        <Jersey position='d' index={9}/> 
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey position='g' index={10}/>
                </div>
            </>
        )
    }
    const fiveThreeTwo = () => {
        return (
            <>
                <div className='flex justify-center gap-5 h-20'>
                        <Jersey className='self-center' position='a' index={0}/>
                        <Jersey className='self-center' position='a' index={1}/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-3'>
                        <Jersey position='m' index={2}/>
                        <Jersey position='m' index={3}/>
                        <Jersey position='m' index={4}/>
                </div>
                <div className='h-40 flex justify-center gap-1'>
                        <Jersey position='d' index={5}/>
                        <Jersey className='self-center' position='d' index={6}/>
                        <Jersey className='self-center' position='d' index={7}/>
                        <Jersey className='self-center' position='d' index={8}/>
                        <Jersey position='d' index={9}/>
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey position='g' index={10}/>
                </div>
            </>
        )
    }

    switch (formation) {
        case '4-3-3':
            teamMarkup = fourThreeThree(); 
            break;
        case '4-4-2':
            teamMarkup = fourFourTwo(); 
            break;
        case '3-4-3':
            teamMarkup = threeFourThree(); 
            break;
        case '5-2-3':
            teamMarkup = fiveTwoThree(); 
            break;
        case '5-3-2':
            teamMarkup = fiveThreeTwo(); 
            break;
    
        default:
            break;
    }
    
  return (
    <>
        <div className='w-full flex flex-col border border-green-400 min-h-[70vh] p-1 m-1 bg-green-100'>
            {teamMarkup}
        </div>
    </>
  )
}
