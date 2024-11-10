import { FC } from 'react'

type WeekNumProps = {
  weeknum: number
}

const page: FC<WeekNumProps> = ({ weeknum }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Week {weeknum}</h1>
    </div>
  )
}

export default page