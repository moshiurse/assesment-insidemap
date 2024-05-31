import PropTypes from 'prop-types';
import Jersey from '../submodules/assets/icons/Jersey';

TeamPreview.propTypes = {
    formation: PropTypes.string,
}

export default function TeamPreview(props) {
    const {formation} = props;
    console.log(formation);
    let teamMarkup = null;

    const fourThreeThree = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-28'>
                        <Jersey className='self-end' position='attack'/>
                        <Jersey position='attack'/>
                        <Jersey className='self-end' position='attack'/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-10'>
                        <Jersey position='mid'/>
                        <Jersey position='mid'/>
                        <Jersey position='mid'/>
                </div>
                <div className='h-40 flex justify-center gap-28'>
                        <Jersey  position='defence'/>
                        <Jersey  position='defence'/>
                        <Jersey  position='defence'/>
                        <Jersey  position='defence'/>
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey position='goalkeeper'/>
                </div>
            </>
        )
    }

    const fourFourTwo = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-20'>
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-10'>
                        <Jersey />
                        <Jersey />
                        <Jersey />
                        <Jersey />
                </div>
                <div className='h-40 flex justify-center gap-28'>
                        <Jersey />
                        <Jersey />
                        <Jersey />
                        <Jersey />
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey />
                </div>
            </>
        )
    }

    const threeFourThree = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-28'>
                        <Jersey className='self-end'/>
                        <Jersey />
                        <Jersey className='self-end'/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-28'>
                        <Jersey />
                        <Jersey />
                        <Jersey />
                        <Jersey />
                </div>
                <div className='h-40 flex justify-center gap-16'>
                        <Jersey />
                        <Jersey />
                        <Jersey />
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey />
                </div>
            </>
        )
    }
    const fiveTwoThree = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-20'>
                        <Jersey className='self-center'/>
                        <Jersey />
                        <Jersey className='self-center'/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-28'>
                        <Jersey />
                        <Jersey />
                </div>
                <div className='h-40 flex justify-center gap-28'>
                        <Jersey />
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                        <Jersey />
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey />
                </div>
            </>
        )
    }
    const fiveThreeTwo = () => {
        return (
            <>
                <div className='flex justify-center gap-36 h-20'>
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                </div>
                <div className='mt-20 h-28 flex justify-center gap-28'>
                        <Jersey />
                        <Jersey />
                        <Jersey />
                </div>
                <div className='h-40 flex justify-center gap-16'>
                        <Jersey />
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                        <Jersey className='self-center'/>
                        <Jersey />
                </div>
                <div className='flex  h-20 justify-center items-center'>
                        <Jersey />
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
        <div className=' w-screen flex flex-col border-2 border-green-400 min-h-[70vh] p-1 m-1 bg-green-100'>
            {teamMarkup}
        </div>
    </>
  )
}
