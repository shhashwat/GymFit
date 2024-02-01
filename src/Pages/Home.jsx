import React, {useState} from 'react'
import { Box } from '@mui/system'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises ={exercises}
      />
    </Box>
  )
}

export default Home