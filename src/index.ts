import { AppDataSource } from "./data-source";
import { Parent } from "./entity/Parent";

AppDataSource.initialize()
  .then(async () => {
    const parentRepository = AppDataSource.getRepository(Parent);
    const parent = await parentRepository.findOne({ where: { id: 1 } });
    console.log(
      "\n\n >>> Departments exists on Parent: ",
      !!parent.departments
    );
    console.log(
      " >>> Setting departments.account.someField to a new value...\n"
    );
    parent.departments.accounting.someField = "updated";
    parentRepository.save(parent);
  })
  .catch((error) => console.log(error));
