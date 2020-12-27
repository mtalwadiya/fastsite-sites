import React, { useState, useEffect } from 'react'
import axios from 'axios'


const EntityContext = React.createContext()

const EntityProvider = (props) => {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState('')
  const [siteConfig, setSiteConfig] = useState({id: '', categories: [], name: "FastSite", heading: "List"})

  const fetchEntities = async () => {
    setLoading(true)
    try {
      const results = await axios.get('/.netlify/functions/list?site=' + siteConfig.id + '&cat=' + cat)
      console.log(results.data)
      setEntities(results.data)
      setLoading(false)
    } catch (e) {
      if (e) {
        console.error(e)
        setLoading(false)
      }
    }
  }

  const fetchMeta = async () => {
    if(window.location.pathname && window.location.pathname !== "/"){
      const site = window.location.pathname.substring(1);
      try {
        const results = await axios.get('/.netlify/functions/meta?site=' + site)
        console.log(results.data)
        if(results.data){
          setSiteConfig(results.data)
        }else{
          setLoading(false)
        }
      } catch (e) {
        if (e) {
          console.error(e)
          setLoading(false)
        }
      }
    }else{
      setLoading(false)
    }
  }

  const handleSelectChange = (e) => {
    setCat(e.target.value);
  }

  useEffect(() => {
    fetchMeta();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if(siteConfig.id){
      fetchEntities();
    }  
  }, [cat, siteConfig]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <EntityContext.Provider value={{
      loading,
      siteConfig,
      cat,
      entities,
      handleSelectChange
    }}>
      {props.children}
    </EntityContext.Provider>
  )
}
const EntityConsumer = EntityContext.Consumer
export { EntityProvider, EntityConsumer, EntityContext }
