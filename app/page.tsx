import NotesList from "./components/notes-list"
import TimerCounter from "./components/timer-counter"
import { Suspense } from "react"
import Spinner from "./components/spinner"
import RefreshBtn from "./components/refresh-btn"

export default function Home() {
  return (
    <main>
      <div className='m-10 text-center'>
        <p>Hello World🚀</p>
        <Suspense fallback={<Spinner color="border-green-500"/>}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
