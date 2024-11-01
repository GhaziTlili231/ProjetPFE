package main.java.com.votrepackage;


import org.springframework.data.jpa.repository.JpaRepository;
import com.votreentreprise.votreprojet.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
