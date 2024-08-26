import React, { useEffect, useState } from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const {contactList, keyword} = useSelector(state=>state);
  const [filteredList, setFilteredList] = useState([]);
  const [isEmpty,setIsEmpty] = useState(false);

  useEffect(() => {
    if (keyword !== "") {
      setFilteredList(contactList.filter(person => person.name.includes(keyword)));
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList])

  useEffect(() => {
    if(filteredList.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [filteredList])

  return (
    <div>
      <SearchBox/>
      <div className="contact-list">
        {isEmpty ?
        <div>
          검색 결과 없음
        </div>
         :
         <>
        num: {filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index}/>
        ))}
        </>
        }
      </div>
    </div>
  )
}

export default ContactList
