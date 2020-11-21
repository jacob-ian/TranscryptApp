/**
 * Create variables for the production environment.
 */

// Import the version from package.json
import { version } from '../../package.json';

// Setup the environment variables
export const environment = {
  production: true,
  appVersion: version,
  stripe: {
    publishableKey:
      'pk_live_51HhpYRKhhuCbc2FakmShlIJmRpVMAmCY9rkIlU5qJGklyCaTEo9QVocfD9cPq7ucKN4Kj70tgy4qA368UbAseU3K00PNcTeUpX',
  },
};
