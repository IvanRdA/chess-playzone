import { Board } from '@/lib/classes'

export default function HomePage() {
  const emptyBoard = new Board(8, 8)
  const log = emptyBoard.createInitialBoard(8, 8)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Chess playzone</h1>
      {log.map((row, x) => {
        return (
          <h2 key={x}>
            {x + 1} - {row}
          </h2>
        )
      })}
    </main>
  )
}
