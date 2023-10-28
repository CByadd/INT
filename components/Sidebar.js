import React from 'react'

function Sidebar() {
  return (
    <div className='h-11 w-11 SIDE'><div></div>
        <button className='H'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///8wMDDCwsKWlpaGhobPz8/MzMzJycnFxcXv7+/4+Pizs7N3d3dCQkJtbW3Y2Njw8PCoqKgSEhLp6elHR0cMDAzf399ZWVlfX18tLS0+Pj6goKAcHBxSUlK9vb1nZ2c4ODiQkJCZmZmkpKQZGRkxsjwpAAAFC0lEQVR4nO3daWOiMBAG4FjvA696VLs9rO3//4vbFLsqhGQImcmEnffzInn6sogoierQZTXL5o/qcZ7NpoR7VWR72izUNYsN2X7JhD11nx7VjomE060qZkt0qNIIN7sSUKkdzZFKItwbfDp7ip1TCJcVQKWWBHsnEA4qgUoN8HePL7QBKYjowqEVqNQQewDYQnuDFC0iC10NErSIK3Q3iN8iqhDSIHqLmEJYg4AWBx9PX8VNHhbrFWgUiEI40E5cmy75fnKAXBThCaGHaJ7KA3X5Ytssc48DTVinQZ2KFteOzY7OQxVLWK9BHWOLn+7tXEQkYd0GdQwtjgCbHR1DwRHWb1Cn1OIUtFk/gtCnQZ1iixlsM/sZFUPo16DOfYsT4Fbv1EJ/YIF4hm5lveMTXtgEeE88QTd6IxU2A94SYecZHeu5JrTQ9yRjIFbf3ilmSyhs2qDOqPYf64FO2LxBnSFfYYgGdUZchaGAlxb5CSEXkdCMOArDNXghchOGBWoiM2HIQzTPAP5+SCEM3aDOBydh+AZrBV+I0SArYeQG8YWxG0QXRm8QWxi/QWQhgwZxhSyAmEIeQEQhEyCekMNJ5idYQi4NognZNIgl5NMgkpATEEXICogh5AVEEDIDhhdyAwYXsgOGFvIDBhYyBIYVcgQGFbIEhhTyBAYUMgWGE3IFBhOyBYYS8gUGEo5jMywJImTcYBgh5waDCFk3GELIu8EAQuYNNhdyb7CxkH2DTYUJAJsJ+R+iqpkwCWATYRrABsJEgP7CVIBKdf2E6QCVGvsIUwLaWqwUpgW0tFglTA1Y3WKFMD1gJdEsTBFYdaAahd3YY/WMsUWTMM0GdUwtGoSpNqhjaLEsTLdBnXKLJWHKDeqUWiwK025Qp9iiahuw1KJqHbBIVO0DFg7UW2HqJ5lrumZhWxrUGZuE7WlQp1sWtqlBnXFR2DbglXgRMvpJc7AMb4XwxzVTyvIq3MQeC1I2v0L4FBupZXoRzmMPBC3zXFicpblN6WlhW/8T5tl8Cxfuf5ZwFh21ij0G5KzULPYQkDNTwDnRkk2mnmMPATnPqnJy0Jak7T6dtht3qr2XbHnm/8G5tP3vh9ApNFPNRHUOsceAmsP3lXfVAiLtyF5/PuzHHgVi+vln/PZeuM1/79McY48EKcfpv7uJr7HHgpLX2zvCrsndU8y68L3FGjwvcRI5rQ3frk26f3p3OVuXJWCUl/P9wP+MJ8bvD8t5iD10YPx/BS1CLhGhCPlHhCLkHxGKkH9EiCt8zfq2ZCE+fEcUniGL2+3BawKxE34CeHkAy6sxFD7DFmDMs2p0vy+O8KmGT+cpNaF1gSJjyquv8xbWXxq+wa/rYgit64RV5C0l4bMHsMG3CxGEPhU2KDGC0Av4PZhkhHXfKX7j+45BL+x5Cn1/6UovnHkKfX81QS+0TVNhi+9jOyIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUIVTo++AqtdD6SK5V6Ds/LbUw8xb6PmlFLbQ+SWYV+j58TC20PlZtf9zTc35aYuHB+qJ2oef8tMTCZQOh57mGVmg9zziFHa/JIUmFL44XdQm9JsMmFU4cL+p8sHzyxVr45QK6hR2PhWjohO/uF4VMDjCoe/VGJdwOAC8Km/5gs16caiwTQSDcnRbrDehF/wJPBGQCpvCSjAAAAABJRU5ErkJggg=='/></button>
        <button className='S'><img src='Search.png'/></button>
        <button className='hidden md:block'><img src='Explore.png'/></button>
        <button className='R'><img src='Reels.png'/></button>
        <button className='ml-1 C'><img src='Chat.png'/></button>
        <button className='ml-2 hidden md:block'><img src='Likes.png'/></button>
        <button className='hidden md:block'><img src='Plus.png'/></button>
    </div>
  )
}

export default Sidebar
