from azure.storage.blob import BlobClient
import os

# set the connection string and file path
container_name = ''
file_path = ''
local_file_path = ''
account_name = ''
# set the SAS token for the container
sas_token = ''

sas_url = f'https://{container_name}.blob.core.windows.net/{container_name}/{file_path}{sas_token}'
# get a BlobClient for the container using the SAS token
blob_client = BlobClient.from_blob_url(sas_url)    

# upload the file to the container
with open(local_file_path, 'rb') as data:
    blob_client.upload_blob(data)
