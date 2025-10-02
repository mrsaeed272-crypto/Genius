import React, { useState } from 'react'

function Upload() {
  const [image, setImage] = useState(null)

  const handleUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="upload-box">
      <h2>Upload your image</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={image} alt="preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}
      <button>Remove Background (coming soon)</button>
    </div>
  )
}

export default Upload
