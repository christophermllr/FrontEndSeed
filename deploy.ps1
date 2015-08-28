## Setup params
param (
    [string]$destinationuri = $(throw "FTP URI is required."), 
    [string]$username = $(throw "FTP Username is required."),    
    [string]$password = $(throw "FTP Password is required."),
    [string]$pathdir = $(throw "Source Directory is required.")
)

## https://github.com/stej/PoshSupport/blob/master/Ftp.psm1
function Upload-FtpFile {
  param(
    [Parameter(Mandatory=$true)]
    [string]
    $sourceuri,
    [Parameter(Mandatory=$true)]
    [string]
    $username,
    [Parameter(Mandatory=$true)]
    [string]
    $password,
    [Parameter(Mandatory=$true)]
    [string]
    $path
  )
  if ($sourceUri -match '\\$|\\\w+$') { throw 'sourceuri should end with a file name' }
  $ftprequest = [System.Net.FtpWebRequest]::Create($sourceuri);
  $ftprequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile;
  $ftprequest.UseBinary = $true

  $ftprequest.Credentials = New-Object System.Net.NetworkCredential($username,$password)

  #$sourceStream = new-object IO.StreamReader $path
  #$fileContents = [Text.Encoding]::UTF8.GetBytes($sourceStream.ReadToEnd());
  #$sourceStream.Close();
  $fileContents = Get-Content $path -encoding byte
  $ftprequest.ContentLength = $fileContents.Length;

  $requestStream = $ftprequest.GetRequestStream();
  $requestStream.Write($fileContents, 0, $fileContents.Length);
  $requestStream.Close();

  $response = $ftprequest.GetResponse();

  Write-Host Upload File Complete, status $response.StatusDescription

  $response.Close();
}

## https://github.com/stej/PoshSupport/blob/master/Ftp.psm1
function Create-FtpDirectory {
  param(
    [Parameter(Mandatory=$true)]
    [string]
    $sourceuri,
    [Parameter(Mandatory=$true)]
    [string]
    $username,
    [Parameter(Mandatory=$true)]
    [string]
    $password
  )
  if ($sourceUri -match '\\$|\\\w+$') { throw 'sourceuri should end with a file name' }
  $ftprequest = [System.Net.FtpWebRequest]::Create($sourceuri);
  $ftprequest.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
  $ftprequest.UseBinary = $true

  $ftprequest.Credentials = New-Object System.Net.NetworkCredential($username,$password)

  $response = $ftprequest.GetResponse();

  Write-Host Upload File Complete, status $response.StatusDescription

  $response.Close();
}

$files = (get-childitem $pathdir -r)
foreach ($file in $files) {
    $remfilename = $file.FullName.Replace($pathdir, "")
    $remfilename = $remfilename.Replace("\", "/")
    $destination = $destinationuri + $remfilename
    if ($file.Attributes.ToString().IndexOf("Directory") -ge 0) {
        try
        {
            ":: Creating FTP Directory " + $destination
            Create-FtpDirectory $destination $username $password
        } catch {} #if the directory already exists, ignore the error
    }
    else {
        ":: Uploading FTP File :: from " + $file.FullName + " to " + $destination
        Upload-FtpFile $destination $username $password $file.FullName
    }
}