import ChildrenProps from '@/types/ChildrenProps'


function Container({ children }: ChildrenProps) {
  return (
    <div className='px-14 py-10'>
        {children}
    </div>
  )
}

export default Container