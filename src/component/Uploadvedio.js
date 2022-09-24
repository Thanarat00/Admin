import SimpleFileUpload, {
  SimpleFileUploadProvider
} from "react-simple-file-upload";

import React, { useState } from "react";

export default function Uploadvedio() {
  const [ setFile] = useState();
    return (
      <div ><center><SimpleFileUpload
      apiKey="468ad98c1498291548f2d3e9218f33ee"
      preview="true"
      onSuccess={setFile}
    /></center> 
    </div>
    )
  }


 