from azure.storage.blob import BlobClient

# set the connection string and file path
container_name = ''
connection_string = ''
file_path = ''
account_name = ''
local_path = ''
# set the SAS token for the file
sas_token = ''



blob_url = f"https://{account_name}.blob.core.windows.net/{container_name}/{file_path}?{sas_token}"
blob_client = BlobClient.from_blob_url(blob_url)

# download the file to the local machine
with open(local_path, 'wb') as f:
    data = blob_client.download_blob()
    data.readinto(f)

