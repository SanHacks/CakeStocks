
# CakeStocks![FinaaalStocks](https://user-images.githubusercontent.com/13138647/193402071-0ec198f7-1bfd-4de8-9be2-301b925bd447.PNG)

The Front End of the web application( displaying a dynamic GoogleSheet)
# Documentation 

A simple CakePHP Web Application That Fetches GoogleSheets(Dynamic Stock Prices) For Various Companies. Setting Up and Building a one page project such as this, requires much less sophistication (and complicated manipulation) with the MVC.

# Get started right away; 
```
$mkdir stk
$ cd /../docker
$ docker-compose up
```
This command `docker-compose up` will install the contaniers for this project in Docker.
Allowing you to access the application: `localhost:8180` 


# Data Source

-Creation of Dynamic Google Sheet(@sheets.google.com)
-A Column with Stock tickers(e.g. TSLA)
-A dynamic column with current(stock prices(note: All Prices A not real-time per se, it is often that the information shown about different stock prices is delayed by approximately 20 minutes but never more than that, therefore all the results are near real-time.))

# View e.g.
Our view for this application is(which loads our Homepage):
```
namespace App\View;

use Cake\View\View;

/**
 * Application View
 *
 * Our application's default view class, which is what we are going to use.
 *
 * @link https://book.cakephp.org/4/en/views.html#the-app-view
 */
class AppView extends View
{
    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading helpers.
     *
     * e.g. `$this->loadHelper('Html');`
     *
     * @return void
     */
    public function initialize(): void
    {
    }
}

```
# Controller e.g.
For this application we use the Pages controller to load our view with the GoogleSheet

```
class PagesController extends AppController
{
    public function display(string ...$path): ?Response
    {
        if (!$path) {
            return $this->redirect('/');
        }
        if (in_array('..', $path, true) || in_array('.', $path, true)) {
            throw new ForbiddenException();
        }
        $page = $subpage = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        $this->set(compact('page', 'subpage'));

        try {
            return $this->render(implode('/', $path));
        } catch (MissingTemplateException $exception) {
            if (Configure::read('debug')) {
                throw $exception;
            }
            throw new NotFoundException();
        }
    }
	}
```

Ok, Now that our MVC is straight forward(with the data source as well); </br>

# Get The Source Code By:

-Cloning the repo or</br>
-Download the ZIP file for this repo</br>
Unzip and Place Docker </br>

# File Structure

The repo should be inside a folder with the name STK;
e.g.
```
STK|-
	|docker(Docker containers for CAKEPHP)
		|
	|cakephp(Our Application)
		|
	|Logs
	
```
# Running & Installing The Application
 From CMD go to `cd` directory location of docker  
 ```
 STK|-
	|docker(Docker containers for CAKEPHP)
	```
With `docker` `dir` open from command line;</br>
To install and build with the application, containers such as, MySQL(though we are not going to use it for this project as it fetches its data from GoogleSheets(through GoogleFinance), PHP-fpm, Webserver:</br>

```bash
mkdir stk
cd stk
curl -Lo cakephp-docker.zip https://github.com/SanHacks/CakeStocks/archive/refs/heads/main.zip && \
....
```
```
$ cd /../docker
$ docker-compose up```

run this command `docker-compose up`

After this you should see stuff like

```
Starting stk-php-fpm
etc...
```

# Accessing the CakePHP application
Now that the application is live, it can be accessed here: `localhost:8180` 
	

