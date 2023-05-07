const configToken = () => ({
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })

export default configToken