using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.Logging;

namespace Web
{

    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Setup configuration sources.
            var configuration = new Configuration();
            configuration.AddEnvironmentVariables();
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
        {
            // Configure the HTTP request pipeline.

            //// Add the console logger.
            //loggerfactory.AddConsole(minLevel: LogLevel.Warning);

            //// Add the following to the request pipeline only in development environment.
            //if (env.IsEnvironment("Development"))
            //{
                app.UseBrowserLink();
                app.UseErrorPage(ErrorPageOptions.ShowAll);
            //}
            //else
            //{
            //    // Add Error handling middleware which catches all application specific errors and
            //    // sends the request to the following path or controller action.
            //    app.UseErrorHandler("/Home/Error");
            //}

            // Add static files to the request pipeline.
            app.UseStaticFiles();

        }
    }
}
