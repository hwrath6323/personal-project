UPDATE client_info
SET 
    client_firstName = ${firstName},
    client_lastName = ${lastName},
    client_email = ${email},
    client_password = ${password},
    client_phone1  = ${phone1}
WHERE id = ${id}