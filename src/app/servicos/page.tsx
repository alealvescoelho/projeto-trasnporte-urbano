'use client'

import { useEffect, useState } from "react"
import { linhas } from "../../../public/mocks/linhas";
import { linha_002 } from "../../../public/mocks/horarios/linha_002";

export default function Servicos() {

  const[search, setSearch] = useState('')
  const[result, setResult] = useState<Array<any>>([])
  const[select, setSelect] = useState('')
  const[linha, setLinha] = useState<Array<any>>([])
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    let aux: any = []
    if (search.length) {
      let term = search.toLocaleLowerCase().trim().replace(" ","")
      aux = linhas?.filter((linha) => {
        let concat: string = linha.codigo + ' - ' + linha.nome
        .toLocaleLowerCase()
        .trim()
        .replace(" ","")
      return concat.includes(term)
      })
    } else {
      aux = []
    }
    setResult(aux)
  }, [search])
  
  function selectLinha(event: any) {
    setLoading(true)
    setSelect(event.codigo)
    //let name = 'linha_' + select
    setTimeout(() => {
      setLinha(linha_002)
      setLoading(false)
    }, 2000)
  }

    return (
      <div className='bg-color-primary-300 justify-center flex'>
        <div className='w-5/6 mt-2 flex flex-col'>
          <div className="mt-2 mb-2">
           <h3 className="m-1">Horários de Linhas</h3>
          </div>
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-screen md:w-1/3 border-r-2 border-color-primary-600">
              <nav className="flex flex-col mr-1">
                <input className="p-2 m-1 text-color-neutral-700 bg-color-primary-400 border-b-2 border-color-primary-700" type="text" placeholder="Pesquise a linha desejada...." onChange={(event) => setSearch(event.target.value)}/>
                {!search.length && (linhas.map((item: any) => (
                  <>
                    <button 
                      className={item.codigo == select ? 'flex border-l-4 border-color-secondary-800 justify-items-start bg-color-secondary-500 m-1 p-1 text-color-primary-200 hover:bg-color-secondary-700' : 'flex justify-items-start bg-color-secondary-500 m-1 p-1 text-color-primary-200 hover:bg-color-secondary-700'}
                      key={item.codigo}
                      value={item.codigo}
                      onClick={() => selectLinha(item)}
                      >
                      {item.codigo + ' - ' + item.nome}
                    </button>
                  </>
                )))}
                {search.length && (
                  result.length ? (
                    (result.map((item: any) => (
                      <>
                        <button 
                          className={item.codigo == select ? 'flex border-l-4 border-color-secondary-800 justify-items-start bg-color-secondary-500 m-1 p-1 text-color-primary-200 hover:bg-color-secondary-700' : 'flex justify-items-start bg-color-secondary-500 m-1 p-1 text-color-primary-200 hover:bg-color-secondary-700'}
                          key={item.codigo}
                          value={item.codigo}
                          onClick={() => selectLinha(item)}
                        >
                          {item.codigo + ' - ' + item.nome}
                        </button>
                      </>
                    )))
                  ) : (
                    <p className="m-1">
                      Nenhuma linha encontrada.
                    </p>
                  )
                )}
              </nav>
            </div>
            <div className="w-2/3">
              <div>
                <>
                  {linha.length && (
                    (linha?.map((item) => {
                      <>
                        <div key={item.id}>
                          <h3>{item.tipo}</h3>
                          <h3>{item.sentido + ' - ' + item.descricao}</h3>
                        </div>
                        <div>
                          <nav>
                            <>
                            {item.horarios.length && (
                              (item.horarios.map((item: any) => {
                                <p key={item.hora}>
                                  {item.hora + item.atendimento}
                                </p>
                              }))
                            )}
                            </>
                          </nav>
                        </div>
                      </>
                    }))
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }