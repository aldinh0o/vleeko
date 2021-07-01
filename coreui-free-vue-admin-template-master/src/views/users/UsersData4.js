const usersData4 = [
    { concepto: 'Samppa Nori', previsto: '2012/01/01', area: 'Member', status: 'Active'},
    { concepto: 'Estavan Lykos', previsto: '2012/02/01', area: 'Staff', status: 'Banned'},
    { concepto: 'Chetan Mohamed', previsto: '2012/02/01', area: 'Admin', status: 'Inactive'},
    { concepto: 'Derick Maximinus', previsto: '2012/03/01', area: 'Member', status: 'Pending'},
    { concepto: 'Friderik Dávid', previsto: '2012/01/21', area: 'Staff', status: 'Active'},
    { concepto: 'Yiorgos Avraamu', previsto: '2012/01/01', area: 'Member', status: 'Active'},
    { concepto: 'Avram Tarasios', previsto: '2012/02/01', area: 'Staff', status: 'Banned'},
    { concepto: 'Quintin Ed', previsto: '2012/02/01', area: 'Admin', status: 'Inactive'},
    { concepto: 'Enéas Kwadwo', previsto: '2012/03/01', area: 'Member', status: 'Pending'},
    { concepto: 'Agapetus Tadeáš', previsto: '2012/01/21', area: 'Staff', status: 'Active'},
    { concepto: 'Carwyn Fachtna', previsto: '2012/01/01', area: 'Member', status: 'Active'},
    { concepto: 'Nehemiah Tatius', previsto: '2012/02/01', area: 'Staff', status: 'Banned'},
    { concepto: 'Ebbe Gemariah', previsto: '2012/02/01', area: 'Admin', status: 'Inactive'},
    { concepto: 'Eustorgios Amulius', previsto: '2012/03/01', area: 'Member', status: 'Pending'},
    { concepto: 'Leopold Gáspár', previsto: '2012/01/21', area: 'Staff', status: 'Active'},
    { concepto: 'Pompeius René', previsto: '2012/01/01', area: 'Member', status: 'Active'},
    { concepto: 'Paĉjo Jadon', previsto: '2012/02/01', area: 'Staff', status: 'Banned'},
    { concepto: 'Micheal Mercurius', previsto: '2012/02/01', area: 'Admin', status: 'Inactive'},
    { concepto: 'Ganesha Dubhghall', previsto: '2012/03/01', area: 'Member', status: 'Pending'},
    { concepto: 'Hiroto Šimun', previsto: '2012/01/21', area: 'Staff', status: 'Active'},
    { concepto: 'Vishnu Serghei', previsto: '2012/01/01', area: 'Member', status: 'Active'},
    { concepto: 'Zbyněk Phoibos', previsto: '2012/02/01', area: 'Staff', status: 'Banned'},
    { concepto: 'Einar Randall', previsto: '2012/02/01', area: 'Admin', status: 'Inactive'},
    { concepto: 'Félix Troels', previsto: '2012/03/21', area: 'Staff', status: 'Active'},
    { concepto: 'Aulus Agmundr', previsto: '2012/01/01', area: 'Member', status: 'Pending'}
  ]
  
  const fields = [
    { key: 'username', _style:'min-width:200px' },
    'registered',
    { key: 'role', _style:'min-width:100px;' },
    { key: 'status', _style:'min-width:100px;' },
    { 
      key: 'show_details', 
      label: '', 
      _style: 'width:1%', 
      sorter: false, 
      filter: false
    }
  ]
  
  export default usersData4

