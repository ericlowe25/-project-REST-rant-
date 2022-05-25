
const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input defaultValue={data.place.name} className='form-control' required id='name' name='name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input defaultValue={data.place.pic} className='form-control' id='pic' name='pic'/>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input defaultValue={data.place.city} className='form-control' id='city' name='city'/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <input defaultValue={data.place.state} className='form-control' id='state' name='state'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input defaultValue={data.place.cuisines} className='form-control' required id='cuisines' name='cuisines'/>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Edit Place'/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
