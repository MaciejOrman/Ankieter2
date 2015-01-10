package pl.wroc.pwr.data.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import pl.wroc.pwr.data.models.enums.StatusAnkiety;

@Entity
public class Ankieta {
	@Id
	private Long id;
	private StatusAnkiety statusAnkiety;	
	@OneToMany
	private List<Pytanie> listaPytan;
	
	protected Ankieta(){}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public StatusAnkiety getStatusAnkiety() {
		return statusAnkiety;
	}
	public void setStatusAnkiety(StatusAnkiety statusAnkiety) {
		this.statusAnkiety = statusAnkiety;
	}
	public List<Pytanie> getListaPytan() {
		return listaPytan;
	}
	public void setListaPytan(List<Pytanie> listaPytan) {
		this.listaPytan = listaPytan;
	}
}